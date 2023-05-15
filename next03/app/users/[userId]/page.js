import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";

export default function UserPage(userId) {
    const userData = getUser(userId);
    const UserPostsData = getUserPosts(userId);

    return (
        <>
            <h2>{userData.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading......</h2>}>
                <UserPosts post={UserPostsData} />
            </Suspense>
        </>
    )
}