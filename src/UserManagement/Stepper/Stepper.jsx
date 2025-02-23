import React, { useState, Children, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './Stepper.css';
import { span } from 'framer-motion/client';

export default function Stepper({
  children,
  initialStep = 1,
  showProgressBar = false,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = '',
  stepContainerClassName = '',
  contentClassName = '',
  footerClassName = '',
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = 'Back',
  nextButtonText = 'Continue',
  endButtonText = 'Заврши',
  disableStepIndicators = false,
  renderStepIndicator,
  isLogin = false,
  validateStep = () => true,
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep) => {
    // if (currentStep === 1) {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep === 1 && !validateStep(currentStep)) {
      return;
    }
    if (!isLastStep) {
      console.log(currentStep);
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };
  return (
    <div
      className={`outer-container ${isLogin ? 'login' : 'register'}`}
      {...rest}
    >
      <div
        className={`step-circle-container ${stepCircleContainerClassName}`}
        style={{ border: '1px solid #222' }}
      >
        <div
          style={{ display: showProgressBar ? 'flex' : 'none' }}
          className={`step-indicator-row ${stepContainerClassName}`}
        >
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;
            return (
              <React.Fragment key={stepNumber}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    // onStepClick: (clicked) => {
                    //   setDirection(clicked > currentStep ? 1 : -1);
                    //   updateStep(clicked);
                    // },
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators}
                    currentStep={currentStep}
                    // onClickStep={(clicked) => {
                    //   setDirection(clicked > currentStep ? 1 : -1);
                    //   updateStep(clicked);
                    // }}
                  />
                )}
                {isNotLastStep && (
                  <StepConnector isComplete={currentStep > stepNumber} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className={`step-content-default ${contentClassName}`}
        >
          {stepsArray[currentStep - 1]}
        </StepContentWrapper>

        {!isCompleted && (
          <div className={`footer-container ${footerClassName}`}>
            <div
              className={`footer-nav ${currentStep !== 1 ? 'spread' : 'end'}`}
            >
              {currentStep !== 1 && (
                <button
                  onClick={handleBack}
                  style={{
                    borderRadius: '5px',
                    background: 'var(--gradient)',
                    border: 'none',
                  }}
                  className={`back-button ${
                    currentStep === 1 ? 'inactive' : ''
                  }`}
                  {...backButtonProps}
                >
                  {backButtonText}
                </button>
              )}
              <button
              style={{
                borderRadius: '5px',
                background: 'var(--gradient)',
                border: 'none',
              }}
                onClick={isLastStep ? handleComplete : handleNext}
                className="next-button"
                {...nextButtonProps}
              >
                {isLastStep ? endButtonText : nextButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StepContentWrapper({
  isCompleted,
  currentStep,
  direction,
  children,
  className,
}) {
  const [parentHeight, setParentHeight] = useState(0);

  return (
    <motion.div
      className={className}
      style={{ position: 'relative', overflow: 'hidden' }}
      animate={{ height: isCompleted ? 0 : parentHeight }}
      transition={{ type: 'spring', duration: 0.4 }}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted && (
          <SlideTransition
            key={currentStep}
            direction={direction}
            onHeightReady={(h) => setParentHeight(h)}
          >
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SlideTransition({ children, direction, onHeightReady }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) onHeightReady(containerRef.current.offsetHeight);
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{ position: 'absolute', left: 0, right: 0, top: 0 }}
    >
      {children}
    </motion.div>
  );
}

const stepVariants = {
  enter: (dir) => ({
    x: dir >= 0 ? '-100%' : '100%',
    opacity: 0,
  }),
  center: {
    x: '0%',
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir >= 0 ? '50%' : '-50%',
    opacity: 0,
  }),
};

export function Step({ children }) {
  return <div className="step-default">{children}</div>;
}

function StepIndicator({
  step,
  currentStep,
  onClickStep,
  disableStepIndicators,
}) {
  const status =
    currentStep === step
      ? 'active'
      : currentStep < step
      ? 'inactive'
      : 'complete';

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) onClickStep(step);
  };
  function StepIndicator({
    step,
    currentStep,
    onClickStep,
    disableStepIndicators,
  }) {
    const status =
      currentStep === step
        ? 'active'
        : currentStep < step
        ? 'inactive'
        : 'complete';

    const handleClick = () => {
      if (step !== currentStep && !disableStepIndicators) onClickStep(step);
    };

    return (
      <motion.div
        onClick={handleClick}
        className="step-indicator"
        animate={status}
        initial={false}
      >
        <motion.div
          variants={{
            inactive: { scale: 1, backgroundColor: '#222', color: 'black' },
            active: { scale: 1, backgroundColor: '222', color: 'black' },
            complete: { scale: 1, backgroundColor: '222', color: 'black' },
          }}
          transition={{ duration: 0.3 }}
          className="step-indicator-inner"
        >
          {status === 'complete' ? (
            <CheckIcon className="check-icon" />
          ) : status === 'active' ? (
            <div className="active-dot" />
          ) : (
            <span className="step-number"></span>
            // <span className="step-number">{span}</span>
          )}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      onClick={handleClick}
      className="step-indicator"
      animate={status}
      initial={false}
    >
      <motion.div
        variants={{
          inactive: {
            scale: 1,
            backgroundColor: 'var(--logo-red)',
            color: '#a3a3a3',
          },
          active: {
            scale: 1,
            backgroundColor: 'var(--logo-red)',
            color: '#00d8ff',
          },
          complete: {
            scale: 1,
            backgroundColor: 'var(--logo-red)',
            color: 'white',
          },
        }}
        transition={{ duration: 0.3 }}
        className="step-indicator-inner"
      >
        {status === 'complete' ? (
          <CheckIcon className="check-icon" />
        ) : status === 'active' ? (
          <div className="active-dot" />
        ) : (
          <span className="step-number"></span>
          // <span className="step-number">{span}</span>
        )}
      </motion.div>
    </motion.div>
  );
}

function StepConnector({ isComplete }) {
  const lineVariants = {
    incomplete: { width: 0, backgroundColor: 'transparent' },
    complete: { width: '100%', backgroundColor: '#00d8ff' },
  };

  return (
    <div className="step-connector">
      <motion.div
        className="step-connector-inner"
        variants={lineVariants}
        initial={false}
        animate={isComplete ? 'complete' : 'incomplete'}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.1,
          type: 'tween',
          ease: 'easeOut',
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
