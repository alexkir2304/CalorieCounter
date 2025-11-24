import React, {useEffect, useMemo} from 'react';
import {productList} from '../constants/index.js';

const FoodCalculator = () => {

    const [baseProductList, setBaseProductList] = React.useState(productList);
    const [selectedSort, setSelectedSort] = React.useState("");
    const [searchText, setSearchText] = React.useState('');
    const [eatenProducts, setEatenProducts] = React.useState([]);


    const sortedPosts =  useMemo(() => {
        // console.log('otrabotala sortedPosts');
        if (selectedSort) {
            return [...baseProductList].sort((a,b) => typeof a[selectedSort] === "string" ? a[selectedSort].localeCompare(b[selectedSort]) : a[selectedSort]-(b[selectedSort]))
        }
        return baseProductList;
    },[selectedSort, baseProductList])

    const searchedAndSortedPosts = useMemo(() => {
        // console.log('otrabotala searchedAndSortedPosts');
        return sortedPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
    }, [searchText, sortedPosts])

    function calrulateEatenCalories() {
        return eatenProducts.reduce((acc, item) => (acc + item.calories),0)
    }

    const eatenCalories = calrulateEatenCalories()

    // const eatenCalories = useMemo(() => {
    //
    // },[eatenProducts])



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

                        {searchedAndSortedPosts.map((item) => {

                            return (
                                <div className="flex justify-between w-full" key={item.name}>
                                    <div className="w-2/4">{item.name}</div>

                                    <div> {
                                        item.caloriePer100grams ?
                                            <div>
                                                <input type="number" defaultValue={0} step={100} min={0} max={5000} onChange={(e) => {
                                                    e.target.parentNode.parentNode.nextSibling.innerHTML = `  ${e.target.value * item.caloriePer100grams/100} ккал`;

                                                }}/>
                                                грамм
                                            </div> :
                                            <div>
                                                <input type="number" defaultValue={1} step={1} min={0} max={50}/>
                                                шт.
                                            </div>
                                    }
                                    </div>

                                    <div></div>

                                    <div>
                                        <button onClick={(e) => {

                                            const sum = e.target.parentNode.previousSibling.previousSibling.childNodes[1].childNodes[0].value
                                            setEatenProducts([...eatenProducts, {
                                                name:item.name,
                                                weight: sum,
                                                calories: sum * item.caloriePer100grams/100,
                                                date: new Date().toLocaleDateString('en-US'),
                                                user: "coming soon" }]);
                                        }}>
                                            Добавить
                                        </button>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="foodCalculator-result flex-center-col test-border">
                    <div className="foodCalculator-result__products flex-center-col w-full">
                        {eatenProducts.map((item,index) => (
                            <div className="flex justify-between w-full" key={index}>
                                <div>{index + 1}</div>
                                <div>{item.name} </div>
                                <div>{item.weight} </div>
                                <div>{item.calories} </div>
                                <div>{item.date} </div>
                                <div>Index is {index} </div>
                                <button onClick={(e) => {
                                    const newArr = [...eatenProducts];
                                    newArr.splice(index,1)
                                    // eatenProducts.splice(e.target.parentNode.firstChild.innerHTML, 1)
                                    console.log(newArr)
                                    setEatenProducts(newArr)
                                    // // e.target.parentNode.remove();
                                }

                                }>Удалить
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="foodCalculator-result__calories flex-center-col test-border w-full">
                        Итого {eatenCalories} калорий.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCalculator;