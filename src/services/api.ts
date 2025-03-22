import axios, { AxiosInstance, AxiosResponse } from "axios";
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CORS configuration
const isDevelopment = true;
const API_BASE = "https://physoc.iitd.ac.in/api";

// Use different API URL based on environment to handle CORS
const API_URL = isDevelopment 
  ? "/api" // This requires Vite proxy configuration
  : API_BASE;

// Add API response interceptor to handle common errors
const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Required for cookies
});

// Error handling interceptor
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle CORS errors more gracefully
    if (error.message === 'Network Error' && isDevelopment) {
      console.error('CORS error detected. Make sure your Vite proxy is configured correctly.');
      console.error('Add this to vite.config.ts:');
      console.error(`
server: {
  proxy: {
    '/api': {
      target: '${API_BASE}',
      changeOrigin: true,
      secure: false
    }
  }
}`);
    }
    return Promise.reject(error);
  }
);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

interface SignInRequest {
  user_name: string;
  password: string;
}

interface SignUpRequest {
  name: string;
  user_name: string;
  email: string;
  password: string;
}

interface EventContact {
  name: string;
  number: string;
}

interface ExternalLink {
  type: string;
  link: string;
}

interface CreateEventRequest {
  name: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  organizer: string;
  capacity: number;
  event_type: "individual" | "team";
  min_team_size?: number;
  max_team_size?: number;
  contacts?: EventContact[] | string;
  external_links?: ExternalLink[] | string;
  tags?: string[] | string;
  images?: File;
}

interface UpdateEventRequest {
  event_id: number;
  name?: string;
  description?: string;
  date?: string;
  time?: string;
  venue?: string;
  organizer?: string;
  capacity?: number;
  event_type?: "individual" | "team";
  min_team_size?: number;
  max_team_size?: number;
  contacts?: EventContact[] | string;
  external_links?: ExternalLink[] | string;
  tags?: string[] | string;
  status?: string;
}

interface CreateTeamRequest {
  event_id: number;
  team_name: string;
}

interface InviteTeamMemberRequest {
  team_id: number;
  user_identifier: string;
}

interface TeamResponseRequest {
  team_id: number;
  response: "accept" | "reject" | "leave";
}

interface FetchTeamParams {
  team_id?: number;
  event_id?: number;
  status?: string;
}

interface AdminTeamActionRequest {
  action: "change_status" | "restore" | "permanent_delete" | "remove_member" | "transfer_ownership";
  team_id: number;
  status?: string;
  user_id?: number;
  new_owner_id?: number;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  [key: string]: any;
}

// Authentication API
const auth = {
  signIn: (userData: SignInRequest): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post("/auth/signin", userData);
  },
  
  signOut: (): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post("/auth/signout");
  },
  
  signUp: (userData: SignUpRequest): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post("/auth/signup", userData);
  }
};

// Events API
const events = {
  create: (eventData: CreateEventRequest): Promise<AxiosResponse<ApiResponse>> => {
    const formData = new FormData();
    
    Object.entries(eventData).forEach(([key, value]) => {
      if (key === 'contacts' || key === 'external_links' || key === 'tags') {
        formData.append(key, typeof value === 'string' ? value : JSON.stringify(value));
      } else if (key === 'images' && value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    });
    
    return apiClient.post("/event/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  getall: (): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(`/event/get`);
  },
  getDetails: (eventId: number): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(`/event/get?event_id=${eventId}`);
  },
  
  delete: (eventId: number): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post(`/event/delete?event_id=${eventId}`);
  },
  
  update: (eventData: UpdateEventRequest): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post("/event/update", eventData);
  }
};

// Teams API
const teams = {
  create: (teamData: CreateTeamRequest): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post("/events_teams/create", teamData);
  },
  
  invite: (inviteData: InviteTeamMemberRequest): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post("/events_teams/invite", inviteData);
  },
  
  respond: (responseData: TeamResponseRequest): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post("/events_teams/response", responseData);
  },
  
  delete: (teamId: number): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post(`/events_teams/delete?team_id=${teamId}`);
  },
  
  fetch: (params: FetchTeamParams): Promise<AxiosResponse<ApiResponse>> => {
    const queryParams = new URLSearchParams();
    
    if (params.team_id) queryParams.append("team_id", params.team_id.toString());
    if (params.event_id) queryParams.append("event_id", params.event_id.toString());
    if (params.status) queryParams.append("status", params.status);
    
    return apiClient.get(`/events_teams/fetch?${queryParams.toString()}`);
  },
  
  adminActions: (actionData: AdminTeamActionRequest): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post("/events_teams/admin", actionData);
  }
};

export const api = {
  auth,
  events,
  teams
};

export default api;

