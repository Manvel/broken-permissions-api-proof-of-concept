function permission_request(origins)
{
  chrome.permissions.request(origins);
}

function permission_remove(origins)
{
  chrome.permissions.remove(origins);
}

function permission_contain(origins)
{
  chrome.permissions.contains(origins, (result) =>
  {
    document.querySelector("#contains").textContent = result;
  });
}

function clear()
{
  document.querySelectorAll("tbody td").forEach((el) =>
  {
    el.textContent = "";
  });
}

addEventListener("DOMContentLoaded", () =>
{
  document.querySelectorAll("button").forEach((element) =>
  {
    element.addEventListener("click", ()=>
    {
      window[element.id]({origins: [document.querySelector("select").value]});
    });
  });
});

chrome.permissions.onAdded.addListener(function(result)
{
  clear();
  document.querySelector("#on-added").textContent = JSON.stringify(result);
});

chrome.permissions.onRemoved.addListener(function(result)
{
  clear();
  document.querySelector("#on-removed").textContent = JSON.stringify(result);
});
