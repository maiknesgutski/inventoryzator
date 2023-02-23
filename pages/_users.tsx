import Document from "./_document"
/**
 * 
 * @param users 
 * @returns HTMLElement
 */
export default function UserList({ users }) {
    return (
        <>
            {Document}
            <ul>
                {users.map((user) => (
                    <li>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

/**
 * function to get the static properties of the site
 * @returns {props:{users}}
 */
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/user')
    const users = await res.json()

    // By returning { props: { users } }, the UserList component
    // will receive `users` as a prop at build time
    return {
        props: {
            users,
        },
    }
}