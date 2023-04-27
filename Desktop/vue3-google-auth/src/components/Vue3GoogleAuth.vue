<template>
    <section class="h-screen  flex items-center justify-center">
        <div class="w-[700px] h-[700px] border">
            <img :src="user.imageUrl" alt="user-image" class="w-full max-h-[500px]">
            <div class="text-xl font-bold text-gray-600 my-3 gap-x-10 flex items-center justify-center px-4">
                <h2>
                   USER NAME IS: {{ user.name }}
                </h2>
                <h2>
                   USER EMAIL IS: {{ user.email }}
                </h2>
            </div>
            <div class="flex gap-x-2 items-center justify-center my-6">
                <button class="py-3 font-bold bg-sky-200 w-32 flex items-center justify-center rounded text-black" @click="login">Login</button>
                <button class="py-3 font-bold bg-sky-200 w-32 flex items-center justify-center rounded text-black" @click="logout">Logout</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import firebaseConfig from "../firebaseConfiguration.js";
firebaseConfig;

const provider = new GoogleAuthProvider();
const auth = getAuth();
const user = reactive({
    name: "",
    email: "",
    imageUrl: ""
});

const login = async (): Promise<void> => {
   await signInWithPopup(auth, provider)
        .then((result) => {
            user.email = result.user.email;
            user.name = result.user.displayName;
            user.imageUrl = result.user.photoURL;
            result.user
        }).catch((error) => {
        console.log(error)
    });
}

const logout = async (): Promise<void> => {
   await signOut(auth)
        .then(() => {
            Object.assign(user, {
                name: "",
                email: "",
                imageUrl: ""
            });
        }).catch((error) => {
        console.log(error)
    });
}
</script>