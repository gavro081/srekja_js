import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel({ value }) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                variant="determinate"
                value={value}
                size={40}
                sx={{
                    color: 'var(--logo-red)',
                }}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" sx={{ color: 'var(--logo-orange)' }}>
                    {`${Math.round(value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel({ activeStep, totalSteps }) {
    const progress = (activeStep / totalSteps) * 100;
    return <CircularProgressWithLabel value={progress} />;
}

CircularWithValueLabel.propTypes = {
    activeStep: PropTypes.number.isRequired,
    totalSteps: PropTypes.number.isRequired,
};
