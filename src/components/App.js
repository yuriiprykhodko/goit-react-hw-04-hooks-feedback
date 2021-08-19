import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Container from './Container';

export default function App() {

   const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };
 const feedbacksObj = { good, neutral, bad };
  const feedbackKeys = Object.keys(feedbacksObj);

  const countTotalFeedback = feedbackKeys.reduce(
    (acc, feedback) => acc + feedbacksObj[feedback],
    0,
  );
  const positiveFeedback = Math.round(
    (good / countTotalFeedback) * 100,
  );

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          feedbackKeys={feedbackKeys}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback ? (
          <Statistics
            feedbacksObj={feedbacksObj}
            feedbackKeys={feedbackKeys}
            total={countTotalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
}


