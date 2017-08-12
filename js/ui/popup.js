function permission_request(origins)
{
  chrome.permissions.request(origins, (granted) =>
  {
    console.log(granted);
    alert(`Requested permission is: ${granted}`);
  });
}

function permission_contain(origins)
{
  console.log(origins);
  chrome.permissions.contains(origins, (result) =>
  {
    console.log(result);
    alert(`Contain permission?: ${result}`);
  });
}

function permission_remove(origins)
{
  chrome.permissions.remove(origins, (remove) => 
  {
    console.log(remove);
    alert(`Was permission removed?: ${remove}`);
  });
}

addEventListener("DOMContentLoaded", () =>
{
  document.querySelectorAll("button").forEach((element) =>
  {
    element.addEventListener("click", ()=>
    {
      window[element.id]({origins: [element.closest("p").querySelector("input").value]});
    });
  });
});