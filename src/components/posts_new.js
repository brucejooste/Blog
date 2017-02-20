import React from 'react';
import{reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends React.Component{

    static contextTypes ={
      router:React.PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props)
            .then(() => {
                //Blog post has been created. Navigate user to index.
                //We navigate by calling this.context.router.push with the path to navigate to
                this.context.router.push('/');
            });
    }

    render(){
        const {fields:{title, categories, content}, handleSubmit} = this.props; //ES6 syntax. Same as typing - const handleSubmit = this.props.handSubmit

        return(
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <img className="navbar-brand"  alt="QuickTrav" />
                            <p className="navbar-text">Travel Booking Accounting Information</p>
                        </div>
                    </div>
                </nav>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <input type="textArea" className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">
                    Cancel
                </Link>

            </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = 'Enter a title';
    }
    if(!values.categories){
        errors.categories = 'Enter a categorie';
    }
    if(!values.content){
        errors.content = 'Enter content';
    }

    return errors;
}

//Redux connect and redux for are almost identical - difference is below
//connect: first argument is mapStateToProps 2nd is mapDispatchToProps
//reduxForm: 1stis form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form:'PostsNewForm',
    fields:['title', 'categories','content'],
    validate
}, null, {createPost})(PostsNew);