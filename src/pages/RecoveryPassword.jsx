import {Fragment, useState} from "react";
import SendEmail from "../components/SendEmail.jsx";
import SentEmail from "../components/SentEmail.jsx";

export default function RecoveryPassword() {
    const [email, setEmail] = useState('');

    return (
        <Fragment>
            {email.length > 0 ?
                <SentEmail email={email}/> :
                <SendEmail setEmail={setEmail} />
            }
        </Fragment>
    )
}