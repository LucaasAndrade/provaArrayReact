import { useState } from 'react'
import { trocarFigurinhas } from '../../assets/trocarFigurinhas';
import './index.css'


export default function Index() {
    const [numero1, setNumero1] = useState();
    const [numero2, setNumero2] = useState();
    const [user1, setUser1] = useState([]);
    const [user2, setUser2] = useState([]);
    const [resp, setResp] = useState();

    function add1() {
        let a = [...user1, numero1];
        setUser1(a);
    }


    function add2() {
        let a = [...user2, numero2];
        setUser2(a);
    }

    function trocar() {
        let a = trocarFigurinhas(user1, user2);
        setResp(`É possível fazer ${a} troca(s)`)
    }

    return (
        <main>
            <div> 
                <h2> Hello World</h2>
            </div>
            <div>
                <div>
                    <label> Usuario 1 </label>
                    <input type="number" value={numero1} onChange={e => setNumero1(e.target.value)}/>
                    <button onClick={add1}> Add </button>
                </div>
                <div>
                    <label> Usuario 2 </label>
                    <input type="number" value={numero2} onChange={e => setNumero2(e.target.value)}/>
                    <button onClick={add2}> Add </button>
                </div>
                <div>
                    <button onClick={trocar}> Trocar </button>
                </div>
            </div>
            <div>
                <div>
                    <h6> User 1 </h6>
                    <div>
                        {user1.map(item =>
                            <label> {item} </label>
                            )}
                    </div>
                </div>
                <div>
                    <h6> User 2 </h6>
                    <div>
                        {user2.map(item =>
                            <label> {item} </label>
                            )}
                    </div>
                </div>
                <div>
                    {resp}
                </div>
            </div>
        </main>
    )
}