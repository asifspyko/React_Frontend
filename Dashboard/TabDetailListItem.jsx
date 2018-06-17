import React, { PropTypes, Component } from 'react';

class TabDetailListItem extends Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      isEditing:false,
      changed_val:''
    }
  }

  handleEditing=(e)=>{
    this.setState({isEditing:true, changed_val:e.target.value});
  };

  handleOnChange=(e)=>{
    this.setState({changed_val:e.target.value});
  };

  handleSubmit=(val)=>{
    // pass back to main comp
    if(this.state.changed_val!=='')
    {
      var attr = this.props.attribute;
      attr.attributeValue = this.state.changed_val;
      this.props.handleAttributeClick(this.props.selected_member, attr, null ,this.props.call_type);
      this.setState({isEditing:false});
    }
  };

  handleReset=()=>{
    this.setState({isEditing:false});
  };

  render(){
    if(!this.props.attribute)
        return <div></div>;
    var input, submit = null;
    if(this.state.isEditing)
    {
      input = <input type="text" onChange={this.handleOnChange} value={this.state.changed_val || ''} />;
      submit = (<div className="">
           <input type="submit" onClick={this.handleSubmit}/>
           <input type="reset" onClick={this.handleReset}/>
           </div>);
    }
    else
    {
      input = <input type="text" onClick={this.handleEditing} placeholder="NO VALUE" value={this.props.attribute.attributeValue || ''} readOnly="readOnly" />;
    }
    return (
      <li key={this.props.attribute.attributeId}>
        <div className="input-inner">
          {input}
          {submit}
        </div>
      </li>
    )
  }
}

export default TabDetailListItem;
