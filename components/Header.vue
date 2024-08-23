<template>
    <header id="header">
        <h1 id="logo"><a href="index.html">Landed</a></h1>
        <nav id="nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li>
                    <a href="#">Layouts</a>
                    <ul>
                        <li><a href="left-sidebar.html">Left Sidebar</a></li>
                        <li><a href="right-sidebar.html">Right Sidebar</a></li>
                        <li><a href="no-sidebar.html">No Sidebar</a></li>
                        <li>
                            <a href="#">Submenu</a>
                            <ul>
                                <li><a href="#">Option 1</a></li>
                                <li><a href="#">Option 2</a></li>
                                <li><a href="#">Option 3</a></li>
                                <li><a href="#">Option 4</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="elements.html">Elements</a></li>
                <li><a href="/login" class="button primary">Sign Up</a></li>
                <li><button @click="signOut" class="button secondary">Sign Out</button></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import {useSupabaseClient} from '#imports';

const supabase = useSupabaseClient();
const error = ref(null);

async function signOut() {
  const { error: signOutError } = await supabase.auth.signOut();
  if (signOutError) {
    error.value = signOutError.message;
    console.error('Error signing out:', signOutError.message);
  } else {
    console.log('Signed out successfully');
    navigateTo('/login');
  }
}

onMounted(async () => {
  const {
    data: { user },
    error: userError
  } = await supabase.auth.getUser();

  if (userError) {
    console.error('Error getting user:', userError.message);
  } else if (user) {
    console.log('User logged in:', user);
  } else {
    console.log('No user is logged in');
  }
});
</script>