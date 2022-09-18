import Card from './../../components/Card';
import Series from './../../components/Series/index';
import useTheme from './../../hooks/useTheme';


export default function SeriesInDb() {
    const {darkTheme} = useTheme()
    return(
        <Card 
            size="12"
            title="Series"
            style={{backgroundColor: darkTheme ? 'black': 'white'}}
            >
            <Series />
        </Card>
    )
} 