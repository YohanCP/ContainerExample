# Deploy Your First Containerized App on Google Cloud Run

This is a complete step-by-step guide to create, containerize, and deploy a simple Node.js application on **Google Cloud Run**, starting from scratch.

---

## Prerequisites

- A **Google Cloud account** ([Sign up here](https://cloud.google.com))
- **Google Cloud SDK (gcloud CLI)** installed and configured ([Install Guide](https://cloud.google.com/sdk/docs/install))
- **Docker** installed on your local machine ([Install Guide](https://docs.docker.com/get-docker/))
- Basic knowledge of command-line interface (terminal)

---

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Click the project dropdown on the top-left → **New Project**.
3. Enter a project name (e.g., `my-first-container-project`).
4. Note the **Project ID** — you will need this later.
5. Click **Create**.

---

## Step 2: Enable Required Google Cloud APIs

In your terminal, run these commands (replace `[PROJECT-ID]` with your actual Project ID):

```bash
gcloud config set project [PROJECT-ID]
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com

```
