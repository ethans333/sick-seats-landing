export default async function (first_name, email) {
  const res = await fetch(
    "https://xcbmkko3i6.execute-api.us-east-1.amazonaws.com/Prod/submit/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: first_name,
        email: email,
      }),
    }
  );

  const data = await res.json();

  console.log(data);
}
