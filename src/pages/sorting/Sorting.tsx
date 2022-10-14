import SortHeader from './components/header/SortHeader';
import SortFooter from './components/footer/SortFooter';
import SortArea from './components/sorting-area/SortArea';
import './Sorting.css'

export default function Sorting(){

    return(
        <div className="sorting-page">
            <SortHeader />
            <SortArea />
            <SortFooter />
        </div>
    )
}