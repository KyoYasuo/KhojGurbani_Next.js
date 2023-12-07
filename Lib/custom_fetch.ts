import toastr from 'toastr';

interface FetchOptions extends RequestInit {
    showToastOnError?: boolean;
}

const handleErrors = async (response: Response): Promise<any> => {
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
    }

    return response.json();
};

const customFetch = async (url: string, options?: FetchOptions): Promise<any> => {
    try {
        const response = await fetch(url, options);
        const data = await handleErrors(response);

        return data;
    } catch (error: any) {
        // Display toastr error message
        if (options?.showToastOnError) {
            toastr.error(error.message || 'An error occurred.');
        }

        // Re-throw the error so the caller can catch it if needed
        throw error;
    }
};

export default customFetch;
