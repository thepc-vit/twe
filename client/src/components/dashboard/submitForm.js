import React from 'react'
import Input from '../form/Input'
import Button from '../form/Button'

function SubmitForm() {

    const finalArticle = {
        title: "",
        type: "",
        content: ""
    }
    const [title, setTitle] = React.useState();
    const [content, setContent] = React.useState();
    const [type, setType] = React.useState();

    function handleChange(event) {
        const title = event.target.name
        const value = event.target.value
        title === "title" ? setTitle(value) : title === "articleType" ? setType(value) : setContent(value)

    }
    function handleClick() {
        finalArticle.title = title
        finalArticle.type = type
        finalArticle.content = content
        console.log(finalArticle);
        setTitle("")
        setContent("")
    }

    return (
        <div>
            <div className="form-group">
                <Input type="input" name="title" placeholder="Article title" onChange={handleChange} />
            </div>
            <div className="form-group">
                <select className="form-control dropdown" onChange={handleChange} name="articleType">
                    <option>--- Select Type of Article ---</option>
                    <option value="news">News Article</option>
                    <option value="movie">Movie Review</option>
                    <option value="ed">Editorial</option>
                    <option value="satire">Satire</option>
                    <option value="misc">Unspecified</option>
                </select>
            </div>
            <div className="form-group">
                <Input type="text-area" name="content" placeholder="Article Content" rows="10" onChange={handleChange} />
            </div>
            <Button classAdd={"btn-solid"} name={"Submit"} handleClick={handleClick} />

        </div>
    )
}

export default SubmitForm;