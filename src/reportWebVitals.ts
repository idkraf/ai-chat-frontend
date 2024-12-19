import { onLCP, onINP, onCLS } from 'web-vitals';

type ReportHandler = (metric: any) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onLCP(onPerfEntry); // Measure Largest Contentful Paint
    onCLS(onPerfEntry); // Measure Cumulative Layout Shift
    onINP(onPerfEntry); // Measure Interaction to Next Paint
  }
};

export default reportWebVitals;
