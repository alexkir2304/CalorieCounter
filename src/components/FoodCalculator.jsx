import React, {useEffect, useMemo} from 'react';
import {productList} from '../constants/index.js';

const FoodCalculator = () => {

    const [baseProductList, setBaseProductList] = React.useState(productList);
    const [selectedSort, setSelectedSort] = React.useState("");
    const [searchText, setSearchText] = React.useState('');

    const sortedPosts =  useMemo(() => {
        console.log('otrabotala sortedPosts');
        if (selectedSort) {
            return [...baseProductList].sort((a,b) => typeof a[selectedSort] === "string" ? a[selectedSort].localeCompare(b[selectedSort]) : a[selectedSort]-(b[selectedSort]))
        }
        return baseProductList;
    },[selectedSort, baseProductList])

    const searchedAndSortedPosts = useMemo(() => {
        console.log('otrabotala searchedAndSortedPosts');
        return sortedPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
    }, [searchText, sortedPosts])

    return (
        <div className="foodCalculator">
            <div className="foodCalculator-title">
                Подсчитать полученные калории
            </div>
            <div className="foodCalculator-search">
                <div>
                    <div className="foodCalculator-searchBar">
                        <input type="text" value={searchText} onChange={(e) =>  setSearchText(e.target.value) }/>
                        <img src="" alt="searchLogo"/>
                    </div>
                    <div className="foodCalculator-productList">

                        <div>

                            <select name="" id=""  onChange={(e) => {
                                setSelectedSort(e.target.value)
                            }}
                            >
                                <option value="blabla" defaultChecked={true}>Сортировать</option>
                                <option value="name">По названию</option>
                                <option value="caloriePer100grams">По калорийности</option>

                            </select>
                        </div>

                        {searchedAndSortedPosts.map((item) => (
                            <div className="flex-center" key={item.name}>
                                <div>{item.name}</div>

                                        <div>{item.caloriePer100grams ?
                                            <input type="number" defaultValue={100} step={100} min={0} max={5000} /> : ""}
                                        </div>
                                        <div>{item.caloriePerPiece ?
                                            <input type="number" defaultValue={1} step={1} min={0} max={50}/> : ""}</div>
                                        <div>Итого{} грамм</div>

                                <div></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="foodCalculator-result">
                    Итого калорий:
                </div>
            </div>
        </div>
    );
};

export default FoodCalculator;