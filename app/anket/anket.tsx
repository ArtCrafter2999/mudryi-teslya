import React from "react";

const Anket = () => {
    return (
        <section>
            <h1>Анкета</h1>
            <div>
                <label>{"Ім'я, Прізвище"}</label>
                <input type={"text"}/>
            </div>
            <div>
                <label>{"Телефон"}</label>
                <input type={"text"}/>
            </div>
            <div>
                <label>{"Дата народження"}</label>
                <input type={"text"}/>
            </div>
            <div className="wrap">
                <h3>{"Батьки"}</h3>
            </div>
            <textarea/>
        </section>
    );
};

export default Anket;