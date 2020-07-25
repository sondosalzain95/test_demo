class newpost {
    title(){
       return cy.get('input[placeholder="Article Title"]')
    }
    describtion(){
       return cy.get('input[placeholder="What\'s this article about?"]')
    }
    body(){
        return cy.get('textarea[placeholder="Write your article (in markdown)"]')
    }
    tag(){
        return cy.get('textarea[placeholder="Enter tags"]')
    }
}
export default newpost 