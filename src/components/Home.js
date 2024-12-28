import "./assets/css/home.css";

const Home  = ()=>{
    return(
        <>
<div>
    <div style={{"display":"flex","justifyContent":"center","gap":"20px"}}>
        <h3><a href="https://drive.google.com/drive/folders/1A0vxuHDJvb5nEHLSYcHtUHLdZWMCGL1j?usp=sharing"> {">"} My Resume {"<"}</a></h3>
        <h3><a href="https://ayushdce2.github.io/ayush/"> {">"} My Portfolio {"<"}</a></h3>
    </div>
</div>
        <div className="table_wrap">
        {/* My resume */}
                
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
                        <tr>
                            <td>6</td>
                            <td>Dice Rolling App</td> 
                            <td> <a href="#" target="_blank">Click</a> </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Food App</td> 
                            <td> <a href="#" target="_blank">Click</a> </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Currency Converter App</td> 
                            <td> <a href="#" target="_blank">Click</a> </td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Stopwatch App</td> 
                            <td> <a href="" target="_blank">Click</a> </td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Calendar</td> 
                            <td> <a href="#" target="_blank">Click</a> </td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Survey Form App</td> 
                            <td> <a href="#" target="_blank">Click</a> </td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>E-commerce App</td> 
                            <td> <a href="#" target="_blank">Click</a> </td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Word Counter App</td> 
                            <td> <a href="#" target="_blank">Click</a> </td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Blog App</td> 
                            <td> <a href="#" target="_blank">Click</a> </td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Bill PDF Generator App</td> 
                            <td> <a href="#" target="_blank">Click</a> </td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Music Player App</td> 
                            <td> <a href="#" target="_blank">Click</a> </td>
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
                            <td>1</td>
                            <td>Task Management</td>
                            <td><a href="https://todo-mern-front-8c90.onrender.com/" target="_blank">Click</a></td>
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
                            <td>1</td>
                            <td>Employee Management</td>
                            <td><a href="https://emp-mgmt-node-6.onrender.com/" target="_blank">Click</a></td>
                        </tr>
                        
                        <tr>
                            <td>2</td>
                            <td>Project Management</td>
                            <td><a href="#" target="_blank">Click</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>E-Commerce</td>
                            <td><a href="#" target="_blank">Click</a></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Hospital Management</td>
                            <td><a href="#" target="_blank">Click</a></td>
                        </tr>
                    </tbody>
                    
                </table>

            </div>
        </>
    )
}

export default Home;