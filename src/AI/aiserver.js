import express from 'express';
import { OpenAI } from 'openai';
import cors from 'cors';
import menu_items from './menuitems.js';

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const tags = [...new Set(menu_items.flatMap(item => item.tags))];

console.log(tags);
const systemContent = [
    {
        role: 'system',
        content: `
        You are a bot that helps the admin filter a user query based on food items.
        Query will be in Macedonian and you need to translate it to english first.
        YOU MUST RETURN A JSON OBJECT.
        If you think the user query is not clear or not related to food return {}.
        I am providing you a list of tags you can choose from.
        Your job is to generate a JSON in the following format:
        {
            "tags": ["tag1", "tag2", ...],
            "name": string,
            "price": number
            "ingredients": [string, string, ...]
        }
        Here are the rules
        1. Your job is to select the tags that best describe the user query.
        2. If the user query is something like 'omelette' you may pass the word omellete as a name.
        3. IF AND ONLY IF the user mentions a number as a budget he has, then you may pass the price as well.
        4. If the user mentions any ingredients you may pass the ingredients as well.
        5. You are allowed to pick any tag that you think is relevant to the user query.
        6. Associate excitement, happiness or will for celebration with alchohol and desserts.
        7. Associate sadness, depression or will for comfort with comfort food.
        8. Associate health, diet, fitness with vegeterian food, protein, salads etc.
        The tags are: ${tags.join(', ')}
    `
    }
];

const getMenuItems = (preferences) => {
    console.log("preferences: " + preferences)
    if (typeof preferences === 'string') {
        preferences = JSON.parse(preferences);
    }
    if (preferences === null || preferences === undefined || Object.keys(preferences).length === 0 || preferences == {}) {
        return [];
    }
    let filteredItems = menu_items;

    if (preferences.tags && preferences.tags.length > 0) {
        // const exactMatches = menu_items.filter(item =>
        //     preferences.tags.every(tag => item.tags.includes(tag))
        // );

        // if (exactMatches.length > 0) {
        //     filteredItems = exactMatches;
        // } else {
        const partialMatches = menu_items.filter(item =>
            item.tags.some(tag => preferences.tags.includes(tag))
        );
        if (partialMatches.length > 0) {
            filteredItems = partialMatches;
        }
    }
    
    // filteredItems.forEach(element => {
    //     console.log(element.name);
    // });
    
    // Filter by name
    if (preferences.name && preferences.name.trim() !== "") {
        let prevItems = filteredItems;
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(preferences.name.toLowerCase()) ||
            item.macedonian_name.toLowerCase().includes(preferences.name.toLowerCase())
        );
        if (filteredItems.length === 0) {
            filteredItems = prevItems;
        }
    }

    // filteredItems.forEach(element => {
    //     console.log(element.name);
    // });

    // Filter by price
    if (preferences.price !== null && preferences.price > 0 && preferences.price !== undefined) {
        filteredItems = filteredItems.filter(item => item.price <= preferences.price);
    }

    // filteredItems.forEach(element => {
    //     console.log(element.name);
    // });

    // Filter by ingredients
    if (preferences.ingredients && preferences.ingredients.length > 0) {
        filteredItems = filteredItems.filter(item =>
            preferences.ingredients.every(ingredient => item.ingredients.includes(ingredient))
        );
    }
    console.log("filteredItems: ")
    filteredItems.forEach(item => console.log(item.name));
    return filteredItems;
}


app.post('/api/chat', async (req, res) => {
    // za testiranje na spinner
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // return res.json([]);
    const userContent = req.body.message;
    console.log(userContent);
    const query = [
        ...systemContent,
        {
            role: 'user',
            content: userContent
        }
    ];
    const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: query,
        max_tokens: 100,
        temperature: 0, 
    });
    const items = getMenuItems(completion.choices[0].message.content);
    res.json(items.length > 0 ? items : []);
});

app.listen(3001, () => console.log('Server running on port 3001'));