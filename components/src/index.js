import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h2>Warning!</h2>
                <h4>Are you sure you want to do this?</h4>
            </div>
            
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                name="Anthony" 
                timeAt="Today @6:53pm" 
                content="Very Nice!" 
                faker={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                name="Natalie" 
                timeAt="Today @6:55pm" 
                content="Your mom's very nice..." 
                faker={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                name="Thomas" 
                timeAt="Today @6:59pm" 
                content="Hahahaha" 
                faker={faker.image.avatar()}
            />
        </ApprovalCard>
        </div>
    );

};

ReactDOM.render(<App />, document.querySelector('#root'));