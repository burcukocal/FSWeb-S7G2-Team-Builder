import { useEffet, useState } from "react";



const Form = (props) => {
    const {ekipUyeleri, setEkipUyeleri, editId } = props;
    const emptyData = {
        firstName: "",
        surname: "",
        email: "",
        rol: "",
      };

    const [uye, setUye] = useState(editId >0 ? ekipUyeleri.find(item => item.id == editId) : emptyData);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUye({ ...uye, [name]: value }); 
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(editId>0) {
            const eskiUye = ekipUyeleri.find(item => item.id == editId)
            eskiUye.firstName = uye.firstName;
            eskiUye.surname = uye.surname;
            eskiUye.email = uye.email;
            eskiUye.rol = uye.rol;
            setEkipUyeleri([...ekipUyeleri])
        }
        else{
            const yeniUye = {...uye, id:(ekipUyeleri.length +1)} 
            setEkipUyeleri([...ekipUyeleri, yeniUye])
        }
        setUye(emptyData);

    };

    return (
        <div className="Form">
            <form onSubmit={submitHandler}>
                <label>Üye İsmi: 
                    <input type="text" name="firstName" onChange={changeHandler} value={uye.firstName} />
                </label>
                <label>Üye Soyadı: 
                    <input type="text" name="surname" onChange={changeHandler} value={uye.surname} />  
                </label>
                <label>Üye E-maili: 
                    <input type="text" name="email" onChange={changeHandler} value={uye.email}/>
                </label>
                <label>Üyenin Rolü: 
                    <input type="text" name="rol" onChange={changeHandler} value={uye.rol}/>    
                </label>
                <button type="submit" value="submit">Gönder</button>             
            </form>
        </div>
    )
}

export default Form;