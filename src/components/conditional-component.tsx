function ConditionalComponent() {

    const userList = [
        { name: 'John', age: 20 },
        { name: 'Jane', age: 25 },
        { name: 'Jack', age: 30 }
    ];

    return (
        <>
            <h2>Conditional component section</h2>
            {userList.map((user, index) => (
                <div key={index}>
                    <h3>{user.name}</h3>
                    {user.age > 20 && <p>{user.age} years old</p>}
                </div>
            ))}
        </>
    );
}

export default ConditionalComponent;