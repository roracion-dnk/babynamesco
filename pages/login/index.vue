<template>
    <div id="page-wrapper">
      <u-card class="w-full max-w-lg bg-black">
        <template #header>
          Login
        </template>
    
        <u-form :state="state" @submit="submit" class="space-y-6">
          <u-form-group label="Email">
            <u-input v-model="state.email" placeholder="Email" class="input-form_style-1" />
          </u-form-group>
    
          <u-form-group label="Password">
            <u-input v-model="state.password" type="password" placeholder="Password" class="input-form_style-1" />
          </u-form-group>
    
          <u-button type="submit">Login</u-button>
        </u-form>
      </u-card>
    </div>
  </template>``
  
  <script lang="ts" setup>
  import type {FormSubmitEvent} from '#ui/types';
  import {useSupabaseClient} from '#imports';
  
  const state = reactive({
    email: '',
    password: '',
  });
  
  const supabase = useSupabaseClient();
  
  async function submit(event: FormSubmitEvent<any>) {
    const { email, password } = event.data;
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // Notify the user about the invalid credentials
      console.error('Invalid credentials:', error.message);
      alert('Invalid email or password. Please try again.');
    } else {
      navigateTo('/admin')
    }
  }
  </script>