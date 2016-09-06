var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Prompt = require('../components/prompt');

var PromptContainer = React.createClass({
    contextTypes: {
    router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            username: ''
        }
    },
    handleUpdateUser: function(event){
        this.setState({
            username: event.target.value
        })
    },
    handleSubmitUser : function(e){
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
            this.context.router.push('/playerTwo/'+ this.state.username)
        }
    },
    render :function () {
        //console.log(this)
        return (
            <Prompt
            onSubmitUser = {this.handleSubmitUser}
            onUpdateUser = {this.handleUpdateUser}
            username ={this.state.username}
            header={this.props.route.header}/>
        )
    }
});
module.exports = PromptContainer;
