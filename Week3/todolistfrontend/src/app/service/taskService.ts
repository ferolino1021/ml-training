import axios, { AxiosError } from "axios";
import api from "../utils/api";
import { Task } from "../types";

const isAxiosError = (error: any): error is AxiosError => {
  return error.isAxiosError !== undefined;
};

export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await api.get("/task");
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error("Axios error getting tasks:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      }
    } else {
      console.error("Unexpected error getting tasks:", error);
    }
    throw error;
  }
};

export const createTask = async (task: {
  title: string;
  completed: boolean;
}): Promise<Task> => {
  try {
    console.log("Creating task:", task);
    const response = await api.post("/task", task);
    console.log("Task created:", response.data);
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error("Axios error creating task:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      }
    } else {
      console.error("Unexpected error creating task:", error);
    }
    throw error;
  }
};

export const updateTask = async (
  id: number,
  task: Partial<Task>
): Promise<Task> => {
  try {
    const response = await api.patch(`/task/${id}`, task);
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error("Axios error updating task:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      }
    } else {
      console.error("Unexpected error updating task:", error);
    }
    throw error;
  }
};

export const deleteTask = async (id: number): Promise<void> => {
  try {
    await api.delete(`/task/${id}`);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error("Axios error deleting task:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      }
    } else {
      console.error("Unexpected error deleting task:", error);
    }
    throw error;
  }
};
