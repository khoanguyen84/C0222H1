import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const tabs = ["posts", "comments", "albums"];
function UseEffect() {
    const [state, setState] = useState({
        loading: false,
        data: []
    });
    const [tab, setTab] = useState("posts");

    useEffect(function () {
        setState({ ...state, loading: true })
        fetch(`https://jsonplaceholder.typicode.com/${tab}`)
            .then(function (res) {
                return res.json();
            })
            .then(function (resData) {
                setState({
                    ...setState,
                    data: resData,
                    loading: false
                });
            })
    }, [tab])
    const { loading, data } = state;
    return (
        <div>

            <div>
                {
                    tabs.map(function (tabItem) {
                        return <button
                            key={tabItem}
                            style={tabItem == tab ? {
                                backgroundColor: 'red',
                                color: 'white'
                            } : {}}
                            onClick={() => setTab(tabItem)}
                        >{tabItem}</button>
                    })
                }
            </div>
            {
                loading ? <Spinner /> : (
                    <ul>
                        {
                            data.map(function (item) {
                                return <li key={item.id}>{item.title || item.name}</li>
                            })
                        }
                    </ul>
                )
            }


        </div>
    )
}


export default UseEffect;