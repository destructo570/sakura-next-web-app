const paths = {
    home(){
        return `/`
    },
    showPost(postId: string){
        return `/posts/${postId}`
    },
    createPost(){
        return `/create-post`
    },
    showProfile(userId: string){
        return `/profile/${userId}`
    },
}

export default paths;