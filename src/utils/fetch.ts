export async function getData(url: string) {
    const res = await fetch(
        process.env.BACKEND_URL + url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'api-key': '64EA089F-9D9E-41F3-864A-790C2658EE98'
            }
        }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch data from ${url} with error ${res.status}`);
    }

    console.log(process.env.BACKEND_URL, url, res.status);
    return res.json();
}