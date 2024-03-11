/* eslint-disable react/prop-types */
export default function MessagesTable({ messages, handleDelete, handleEdit }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Message</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {messages.map(m => (
                    <tr key={m.id}>
                        {console.log(m)}
                        <td>{m.id}</td>
                        <td>{m.text}</td>
                        <td>
                            <button onClick={() => handleEdit(m)} >Edit</button>
                            <button onClick={() => handleDelete(m.id)} >Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}