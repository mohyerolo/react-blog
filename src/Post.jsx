
function Post() {
    const post1 = "something";
    const post2 = "sometons";

    return (
        <ul>
            <li>new</li>
            <li>{post1}</li>
            <li>{post2.toUpperCase()}</li>
        </ul>    
    );
}

export default Post