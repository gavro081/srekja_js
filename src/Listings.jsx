import React from 'react';
import styled from 'styled-components';
import { listings } from './listings';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Navbar from './shumaComponents/Navbar';
import Footer from './shumaComponents/Footer';

import CheckboxesGroup from './filters2.jsx';
import { createGlobalStyle } from 'styled-components';

const Card = styled.div`
  background: var(--body-white);
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
  padding-bottom: 40px;
  max-width: 40rem;
  width: 100%;
  margin-bottom: 24px;
  min-height: 300px;
  position: relative;
`;

const CardHeader = styled.div`
  margin-bottom: 24px;
`;

const CompanyName = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 8px 0;
`;

const Title = styled.h2`
  font-size: 23px;
  font-weight: bold;
  margin: 0 0 8px 0;
`;

const PostDate = styled.p`
  color: #6b7280;
  margin: 0;
`;

const MetadataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MetadataItem = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 4px 0;
  }

  p {
    color: #6b7280;
    margin: 0;
  }
`;

const Description = styled.p`
  color: #374151;
  margin: 0 0 24px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 45px;
`;

const SkillBadge = styled.span`
  background: #f3f4f6;
  color: #374151;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
`;

const SeeMoreButton = styled.button`
  background: #059669;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  position: absolute;
  bottom: 24px;
  left: 24px; // For left alignment
  /* right: 24px; */ // Uncomment this and comment out left: 24px for right alignment
`;

const PageContainer = styled.div`
  padding: 24px;
  width: 100%;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const JobsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 700px;
  margin-left: 10%;
`;
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

// Job Posting Card Component
const JobPostingCard = ({
  company,
  title,
  postedDate,
  hours,
  experienceLevel,
  description,
  skills = [],
  skills_mk = [],
  type,
}) => {
  return (
    <Card>
      <CardHeader>
        <CompanyName>{company}</CompanyName>
        <Title>{title}</Title>
        <PostDate>Постирано {postedDate}</PostDate>
      </CardHeader>

      <MetadataGrid>
        <MetadataItem>
          <h3>{hours} часа неделно</h3>
        </MetadataItem>
        <MetadataItem>
          <h3>{experienceLevel}</h3>
          <p>Experience level</p>
          {/* македонски */}
        </MetadataItem>
      </MetadataGrid>

      <Description>{description}</Description>

      <SkillsContainer>
        {skills_mk.map((skill, index) => (
          <SkillBadge key={index}>{skill}</SkillBadge>
        ))}
      </SkillsContainer>

      <SeeMoreButton>See more</SeeMoreButton>
    </Card>
  );
};

const Listings = () => {
  const [filteredListings, setFilteredListings] = React.useState(listings);

  const handleFiltersChange = (filters) => {
    // Check if any filters are actually selected
    const hasActiveFilters = Object.values(filters).some((category) =>
      Object.values(category).some((isChecked) => isChecked)
    );

    if (!hasActiveFilters) {
      setFilteredListings(listings);
      return;
    }

    const filtered = listings.filter((job) => {
      // Only check tags if there are active tag filters
      const activeTags = Object.entries(filters.tags)
        .filter(([_, isChecked]) => isChecked)
        .map(([tag]) => tag);

      const matchesTags =
        activeTags.length === 0 ||
        activeTags.some((tag) => job.tag.includes(tag));

      // Only check employment types if there are active type filters
      const activeTypes = Object.entries(filters.employmentTypes)
        .filter(([_, isChecked]) => isChecked)
        .map(([type]) => type);

      const matchesType =
        activeTypes.length === 0 || activeTypes.includes(job.employmentType);

      // Only check experience levels if there are active level filters
      const activeLevels = Object.entries(filters.experienceLevels)
        .filter(([_, isChecked]) => isChecked)
        .map(([level]) => level);

      const matchesLevel =
        activeLevels.length === 0 || activeLevels.includes(job.experienceLevel);

      return matchesTags && matchesType && matchesLevel;
    });

    setFilteredListings(filtered);
  };

  return (
    <>
      <Navbar></Navbar>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
        <CheckboxesGroup onFiltersChange={handleFiltersChange} />

        <PageContainer>
          {/* <PageTitle>Available Positions</PageTitle> */}
          <JobsContainer>
            {filteredListings.map((job, index) => (
              <JobPostingCard key={`job-${index}`} {...job} />
            ))}
          </JobsContainer>
        </PageContainer>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Listings;
