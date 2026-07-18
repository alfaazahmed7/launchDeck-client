const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL!;

export const serverFetch = async <T>(path: string): Promise<T> => {
    const res = await fetch(`${baseUrl}${path}`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
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