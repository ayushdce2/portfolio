import "./assets/css/home.css";

const Home  = ()=>{
    return(
        <>
        <div className="table_wrap">

        {/* Frontend - (React) - Application */}
            <table border={1}>
                <thead>
                    <tr>
                        <th colSpan={3}>
                            <h3>Frontend - (React) - Apps </h3>
                        </th>
                    </tr>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Title</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            1.
                        </td>
                        <td>
                            To-do App
                        </td>
                        <td>
                            <a href="https://ayushdce2.github.io/todo_react/" target="_blank">Click</a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Weather App</td>
                        <td><a href="https://ayushdce2.github.io/weather_react/" target="_blank">Click</a> </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Calculator App</td>
                        <td><a href="https://ayushdce2.github.io/calculator_react/" target="_blank">Click</a></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Expense App</td>
                        <td> <a href="https://ayushdce2.github.io/expenses_react/" target="_blank">Click</a> </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Quiz App</td> 
                        <td> <a href="https://ayushdce2.github.io/quiz_react/" target="_blank">Click</a> </td>
                    </tr>
                </tbody>
            </table>
            {/* Frontend - (React) - Websites */}
            <table border={1}>
                <thead>
                    <tr>
                        <th colSpan={3}>
                            <h3>Frontend - (React) - Websites </h3>
                        </th>
                    </tr>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Title</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            Digital Marketing Website
                        </td>
                        <td>
                            <a href="https://ayushdce2.github.io/digitalmarketing_web/"  target="_blank">Click</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2.
                        </td>
                        <td>
                            Hospital Website
                        </td>
                        <td>
                            <a href="https://ayushdce2.github.io/hospital_web/"  target="_blank">Click</a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>E-commerce Website</td>
                        <td> <a href="https://ayushdce2.github.io/ecommerce_web/" target="_blank">Click</a> </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Restaurant Website</td>
                        <td> <a href="https://ayushdce2.github.io/restaurant_web/" target="_blank">Click</a> </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>School Website</td>
                        <td> <a href="https://ayushdce2.github.io/school_web/" target="_blank">Click</a> </td>
                    </tr>
                </tbody>

            </table>

                        {/* Backend - (MERN) - Small Application */}
                        <table border={1}>
                <thead>
                    <tr>
                        <th colSpan={3}>
                            <h3>Backend - (MERN) - Small Application </h3>
                        </th>
                    </tr>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Title</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                    </tr>
                </tbody>

            </table>

            {/* Backend - (MERN) - Big Application */}
            <table border={1}>
            <thead>
                    <tr>
                        <th colSpan={3}>
                            <h3>Backend - (MERN) - Big Application </h3>
                        </th>
                    </tr>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Title</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            Hospital Mgmt System
                        </td>
                        <td>
                            <a href="https://ayushdce2.github.io/hospital_mgmt/" target="_blank">Click</a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Employee Mgmt System</td>
                        <td><a href="https://ayushdce2.github.io/emp_mgmt_node/" target="_blank">Click</a></td>
                    </tr>
                </tbody>
                
            </table>

                    {/* My resume */}
        <h3><a href="https://ayushdce2.github.io/my_resume/">My Resume</a></h3>

            </div>
        </>
    )
}

export default Home;