import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

// é um tipo.
type Props = { 
  saleId : number;
}
// axios biblioteca para fazer requisição.
function handleClick(id : number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
     toast.info("SMS enviado com sucesso!");
    })
}

// {saleId} é o ID da venda,  Props é o tipo.
// Props são promessas.
function NotificationButton({saleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon}alt="Notificar" />
      </div>
    )

}

export default NotificationButton;