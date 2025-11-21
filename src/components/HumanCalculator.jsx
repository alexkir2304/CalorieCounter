import React from 'react';

const HumanCalculator = () => {

    const [parameters, setParameters] = React.useState({gender:'', age:'', weight:'', height:'', lifestyle: ''});
    const [parametersResult, setParametersResult] = React.useState(null)

    return (
        <div className="humanCalculator">
            <div className="description">
                <h2>
                    Калькулятор суточной нормы калорий
                </h2>
                <p>
                    Калькулятор калорий нужен для расчета индивидуальной суточной нормы потребления энергии (калорий) , что помогает эффективно контролировать и корректировать вес, а также составлять сбалансированный рацион
                </p>
            </div>
            <div className="parameters">
                <div className="inputs">
                    <div className="gender">
                        <div className="gender-title">
                            Ваш пол
                        </div>
                        <div className="gender-options">
                            <div className={`gender-options__male ${parameters.gender === 'male' ? 'active' : ''}`}
                                 onClick={() => setParameters({...parameters, gender: "male"})}>
                                <span></span>
                                <span>Муж</span>
                            </div>
                            <div className={`gender-options__female ${parameters.gender === 'female' ? 'active' : ''}`}
                                 onClick={() => setParameters({...parameters, gender: "female"})}>
                                <span></span>
                                <span>Жен</span>
                            </div>
                        </div>
                    </div>
                    <div className="metricks">
                        <div className="metricks-age">
                            <div className="metricks-age__title">Возраст</div>
                            <div className="metricks-age__value">
                                <input type="number" value={parameters.age}
                                       onChange={(e) => setParameters({...parameters, age: e.target.value})}/>
                            </div>
                            <div className="metricks-age__unit">лет</div>
                        </div>
                        <div className="metricks-weight">
                            <div className="metricks-weight__title">Вес</div>
                            <div className="metricks-weight__value">
                                <input type="number" value={parameters.weight}
                                       onChange={(e) => setParameters({...parameters, weight: e.target.value})}/>
                            </div>
                            <div className="metricks-weight__unit">кг</div>
                        </div>
                        <div className="metricks-height">
                            <div className="metricks-height__title">Рост</div>
                            <div className="metricks-height__value">
                                <input type="number" value={parameters.height}
                                       onChange={(e) => setParameters({...parameters, height: e.target.value})}/>
                            </div>
                            <div className="metricks-height__unit">см</div>
                        </div>
                    </div>
                    <div className="lifestyle">
                        <div className="lifestyle-title">
                            Образ жизни
                        </div>
                        <div className="lifestyle-options">
                            <div className={`lifestyle-options__1 ${parameters.lifestyle === '1.2' ? 'active' : ''}`}
                                 onClick={() => setParameters({...parameters, lifestyle: "1.2"})}>
                                <span></span>
                                <span>Сидячий и малоподвижный</span>
                            </div>
                            <div className={`lifestyle-options__2 ${parameters.lifestyle === '1.375' ? 'active' : ''}`}
                                 onClick={() => setParameters({...parameters, lifestyle: "1.375"})}>
                                <span></span>
                                <span>Легкая активность (физические нагрузки 1-3 раза в неделю)</span>
                            </div>
                            <div className={`lifestyle-options__3 ${parameters.lifestyle === '1.55' ? 'active' : ''}`}
                                 onClick={() => setParameters({...parameters, lifestyle: "1.55"})}>
                                <span></span>
                                <span>Средняя активность (физические нагрузки 3-5 раз в неделю)</span>
                            </div>
                            <div className={`lifestyle-options__4 ${parameters.lifestyle === '1.725' ? 'active' : ''}`}
                                 onClick={() => setParameters({...parameters, lifestyle: "1.725"})}>
                                <span></span>
                                <span>Высокая активность (физические нагрузки 6-7 раз в неделю)</span>
                            </div>
                            <div className={`lifestyle-options__5 ${parameters.lifestyle === '1.9' ? 'active' : ''}`}
                                 onClick={() => setParameters({...parameters, lifestyle: "1.9"})}>
                                <span></span>
                                <span>Очень высокая активность (постоянно высокая физическая нагрузка)</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="humanCalculator-result">
                <div>
                    <div>Для сброса веса</div>
                    <div>{(parametersResult * 0.85).toFixed(0)} ккал</div>
                </div>
                <div>
                    <div>Для поддержки веса</div>
                    <div>{parametersResult} ккал</div>
                </div>
                <div>
                    <div>Для набора мышечной массы</div>
                    <div>{(parametersResult * 1.15).toFixed(0)} ккал</div>
                </div>
                <button onClick={()=> {
                    const entries = Object.values(parameters);
                    const filteredEntries = entries.filter((entry) => entry==="");

                    filteredEntries.length === 0    //all the inputs have been used
                    ? (parameters.gender === 'male' ? setParametersResult((10 * parameters.weight + 6.25 * parameters.height - 5 * parameters.age + 5) * parameters.lifestyle)
                        :  setParametersResult((10 * parameters.weight + 6.25 * parameters.height - 5 * parameters.age - 161) * parameters.lifestyle)) : alert('Пожалуйста, заполните все поля');
                }
                }>Рассчитать</button>
            </div>


        </div>
    );
};

export default HumanCalculator;