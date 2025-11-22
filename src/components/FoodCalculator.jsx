import React from 'react';
import {productList} from '../constants/index.js';

const FoodCalculator = () => {

    const [selectedSort, setSelectedSort] = React.useState("name");
    const [baseProductList, setBaseProductList] = React.useState(productList);
    const [sortedProducts, setSortedProducts] = React.useState(baseProductList);

    const sortProducts = (filter) => {
        setSelectedSort(filter)
        setSortedProducts([...baseProductList].sort((a,b) => typeof a[filter] === "string" ? a[filter].localeCompare(b[filter]) : a[filter]-(b[filter])))
    }

    return (
        <div className="foodCalculator">
            <div className="foodCalculator-title">
                Подсчитать полученные калории
            </div>
            <div className="foodCalculator-search">
                <div>
                    <div className="foodCalculator-searchBar">
                        <input type="text"/>
                        <img src="" alt="searchLogo"/>
                    </div>
                    <div className="foodCalculator-productList">

                        <div>

                            <select name="" id=""  onChange={(e) => {
                                sortProducts(e.target.value);
                            }}
                            >
                                <option value="blabla" defaultChecked={true}>Сортировать</option>
                                <option value="name">По названию</option>
                                <option value="caloriePer100grams">По калорийности</option>

                            </select>
                        </div>

                        {sortedProducts.map((item) => (
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