var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
    contextTypes: {
    router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            username: ''
        }
    },
    onUpdateUser: function(event){
        this.setState({
            username: event.target.value
        })
    },
    onSubmitUser : function(e){
        console.log("here");
        e.preventDefault();
        var username = this.state.username;
        this.setState({
            username:''
        });

        if(this.props.routeParams.playerOne) {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            })
        }else{
            console.log("here");
            this.context.router.push('/playerTwo/'+ this.state.username)
        }
    },
    render :function () {
        //console.log(this)
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
                <h1>{this.props.route.header}</h1>
                <div className="col-sm-12">
                    <from onSubmit={this.onSubmitUser}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Github Username"
                                onChange={this.onUpdateUser}
                                value={this.state.username}
                                type= "text" />
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                            <button
                                className="btn btn-block btn-success"
                                type="submit">
                                        Continue
                            </button>
                        </div>
                    </from>
                </div>
            </div>
        )
    }
});
module.exports = PromptContainer;
