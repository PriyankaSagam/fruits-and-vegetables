const React = require('react');

class Index extends React.Component {
    render() {
        const { vegetables } = this.props;
        // const fruits = this.props.fruits;

        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <nav>
                    <a href="/vegetables/new">Create a New Vegetable</a>
                </nav>
                <ul>
                    {vegetables.map((vegetable, i) => {
                        return (
                            <li>
                                The {' '}
                                {/* <a href={`/vegetables/${i}`}> */}
                                <a href={`/vegetables/${vegetable._id}`}>
                                    {vegetable.name}
                                </a> {' '}
                                is {vegetable.color} <br></br>
                                {vegetable.readyToEat
                                ? `It is ready to eat`
                            :   `It is NOT ready to eat`}
                                <br />
                                <a href={`/vegetables/${vegetable._id}/edit`}> Edit This Vegetable </a>
                            <form action={`/vegetables/${vegetable._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" />
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;