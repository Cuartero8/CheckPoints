/* eslint-disable react/prop-types */
export default function BookTable({ books, handleDelete }) {
    console.log(books);

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Pub. year</th>
                </tr>
            </thead>
            <tbody>
                {books.map(b => (
                    <tr key={b.id}>
                        <td>{b.title}</td>
                        <td>{b.author}</td>
                        <td>{b.year}</td>
                        <td><button onClick={() => handleDelete(b.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}