import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from '../NotificationButton';
import './styles.css'

function SalesCard() {
    //Macete para criar uma data de X dias atrás:
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    // responsavel para alterar a data
    //minDate, setMinDate é um dato composto , setMinDate é a function que muda o dado.
    // é uma declaração do estado dentro do componente Reat.
    // useState(new Date()); começando com a data atual
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    // useEffect React Huk = quando mudar um dado executa essa função.
    // [minDate, maxDate] vai mudar sempre que atualizar as datas.
    useEffect(() => {

            const dmin = minDate.toISOString().slice(0, 10);
            const dmax = maxDate.toISOString().slice(0, 10);

            console.log(dmin);

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then((response) => {
                setSales(response.data.content); // atualizar o useState com o valor que retornout da API.
            })
    }, [minDate, maxDate]);

    // .map() e para percorrer a lista e faz uma operação com cada element da lista.
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={minDate}
                            //onChange evento que altera data dentro do componente através do setMinDate.
                            onChange={(date: Date) => setMinDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>

                            {sales.map(sale => {
                                return (
                                    <tr key={sale.id}>
                                        <td className="show992">{sale.id}</td>
                                        <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <td className="show992">{sale.visited}</td>
                                        <td className="show992">{sale.deals}</td>
                                        <td>{sale.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="dsmeta-red-btn-container">
                                                <NotificationButton />
                                            </div>
                                        </td>
                                    </tr>
                                )

                            })}

                        </tbody>

                    </table>
                </div>

            </div>

        </>
    )

}

export default SalesCard;