const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL!;

export const serverFetch = async <T>(path: string): Promise<T> => {
    const url = `${baseUrl}${path}`;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(
            `Fetch failed: ${res.status} ${res.statusText}\nURL: ${url}`
        );
    }

    return res.json() as Promise<T>;
};

export const serverMutation = async (
    path: string,
    data: Record<string, unknown>,
    method: 'POST'
) => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return res.json();
}