import React from 'react';

const Form = () => {
    return (
        <div className="wrapper">
            <h1>Sign up</h1>
            <form>
                <label>
                <form onSubmit={onFormSubmit}>
                    <p>Username:</p>
                    <input
                        type="text"
                        // value={}
                        // onChange={(event) => setName(event.target.value)}
                        minLength="3"
                        maxLength="20"
                        required
                    />
                     <p>Password:</p>
                    <input
                        type="text"
                        // value={}
                        // onChange={(event) => setName(event.target.value)}
                        minLength="3"
                        maxLength="20"
                        required
                    />
                      <button type="submit">Submit</button>
</form>
                </label>
                <button></button>
            </form>
        </div>
    )
}

export default Form