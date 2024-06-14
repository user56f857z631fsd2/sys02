using UdonSharp;
using UnityEngine;

public class APIController : UdonSharpBehaviour
{
    public string apiUrl = "https://your-netlify-api-endpoint-url"; // Remplacez par votre URL d'API Netlify

    private void Start()
    {
        StartCoroutine(ToggleObjectCoroutine());
    }

    private IEnumerator ToggleObjectCoroutine()
    {
        // Appel à l'API Netlify
        using (WWW www = new WWW(apiUrl))
        {
            yield return www;

            if (string.IsNullOrEmpty(www.error))
            {
                Debug.Log("API call successful: " + www.text);
                
                // Activer l'objet si l'appel à l'API est réussi
                GameObject objectToToggle = GameObject.Find("NameOfYourGameObject"); // Remplacez par le nom de votre objet à activer
                if (objectToToggle != null)
                {
                    objectToToggle.SetActive(true);
                }
            }
            else
            {
                Debug.LogError("API call failed: " + www.error);
            }
        }
    }
}
