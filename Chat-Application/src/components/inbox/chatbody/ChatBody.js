// import Blank from "./Blank";
import { useParams } from 'react-router-dom';
import { useGetMessagesQuery } from '../../../redux/features/messages/messagesApi';
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";
import Error from '../../ui/Error';


export default function ChatBody() {
    const { id } = useParams()
    const { data: messages, isError, isLoading, error } = useGetMessagesQuery(id);

    let content = null
    if (isLoading) {
        content = <li className='m-2 text-center'>Loading...</li>
    } else if (!isLoading && isError) {
        content = (
            <li className='m-2 text-center'>
                <Error message={ error?.data }></Error>
            </li>
        )
    } else if (!isError && !isLoading && messages?.length === 0) {
        content = <li className='m-2 text-center'> No messages Found!</li>
    } else if (!isError && !isLoading && messages?.length > 0) {
        content = <>
            <ChatHead
                message={ messages[0] }
            />
            <Messages messages={ messages } />
            <Options />
        </>
    }


    return (
        <div className="w-full lg:col-span-2 lg:block">
            <div className="w-full grid conversation-row-grid">
                { content }
                {/* <Blank /> */ }
            </div>
        </div>
    );
}
