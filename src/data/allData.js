import jsData from "./data";
import reactData from "./reactData";
import reduxData from "./reduxData";
import htmlData from "./htmlData";
import cssData from "./cssData";
import jsPracticeData from "./jsPrcaticeData";
import reactPracticeData from "./reactPracticeData"; // ✅ Fix here too

const tagWithModule = (data, module) =>
  data.map((item) => ({ ...item, module }));

const allData = [
  ...tagWithModule(jsData, 'javascript'),
  ...tagWithModule(reactData, 'reactjs'),
  ...tagWithModule(reduxData, 'redux'),
  ...tagWithModule(htmlData, 'html'),
  ...tagWithModule(cssData, 'css'),
  ...tagWithModule(jsPracticeData, 'jspractice'),
  ...tagWithModule(reactPracticeData, 'reactpractice'),
];

export default allData;

