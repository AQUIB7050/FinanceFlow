import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    let dataPointValues = props.dataPoints.map((dp) => dp.value);
    let maxVal = Math.max(...dataPointValues);

    return(
    <div className='chart'>
        {props.dataPoints.map((dp) => {
           return(<ChartBar key={dp.label} value={dp.value} label={dp.label} maxValue={maxVal}/>)
        })}
    </div>
    );
}

export default Chart;